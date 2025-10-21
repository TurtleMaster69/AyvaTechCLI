import { Alert, Box, Button, Paper, Snackbar, styled, TextField } from '@mui/material';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';


type ResultType = {
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
};

const FormTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
        borderRadius: 8
    },
    '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
        borderRadius: 8
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'white',
            borderRadius: 8
        }
    },
    background: 'rgba(255,255,255,0.08)', borderRadius: 8, height: '64px',
});


export default function ContactForm() {
    const { t } = useTranslation()
    const [emailError, setEmailError] = useState<{ isError: boolean, message: string }>
        (
            {
                isError: false,
                message: ""
            }
        );
    const [nameError, setNameError] = useState<{ isError: boolean, message: string }>
        (
            {
                isError: false,
                message: ""
            }
        );
    const [messageError, setMessageError] = useState<{ isError: boolean, message: string }>
        (
            {
                isError: false,
                message: ""
            }
        );

    //snackbar
    const [open, setOpen] = useState(false);
    //web3forms contact email section
    const [_result, setResult] = useState<ResultType>({ message: "", severity: "error" });
    const onSubmit = async (form: HTMLFormElement
    ) => {
        setResult({ message: "Sending....", severity: "error" });
        const formData = new FormData(form);

        formData.append("access_key", "ff128884-df06-4cf3-a507-d9d19b129ea0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult({ message: "Sporočilo uspešno poslano!", severity: "success" });
            setOpen(true);
            form.reset();

        } else {
            console.log("Error", data);
            setResult({ message: data.message, severity: "error" });
        }
    };
    return (
        <Paper
            component="form"
            elevation={0}
            sx={{
                width: '100%',
                backgroundColor: 'transparent'
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <FormTextField
                    name="name"
                    label={t('contact.form.name-field')}
                    variant="outlined"
                    fullWidth
                    required
                    size="medium"
                    error={nameError.isError}
                    helperText={
                        nameError.message
                    }
                    sx={{
                        "& .MuiInputBase-root": {
                            height: '64px', // sets container height
                        },
                        "& .MuiInputBase-inputMultiline": {
                            height: "100%", // makes textarea fill container
                            boxSizing: "border-box",

                        }, height: '64px'
                    }}

                />

                <FormTextField
                    name="email"
                    label={t('contact.form.email-field')}
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    size="medium"
                    error={emailError.isError}
                    helperText={
                        emailError.message
                    }
                    sx={{
                        "& .MuiInputBase-root": {
                            height: '64px', // sets container height
                        },
                        "& .MuiInputBase-inputMultiline": {
                            height: "100%", // makes textarea fill container
                            boxSizing: "border-box",

                        }, height: '64px'
                    }}
                />

                <FormTextField
                    name="message"
                    label={t('contact.form.message-field')}
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    required
                    error={messageError.isError}
                    helperText={
                        messageError.message
                    }
                    sx={{ height: 173, }}

                />


                <Box sx={{ display: 'inline-flex' }}>
                    <Button
                        type="submit"
                        variant="contained"

                        sx={{
                            width: "auto",
                            paddingLeft: "24px",
                            paddingRight: "24px",
                            paddingTop: "14px",
                            paddingBottom: "14px",
                            borderRadius: "999px",
                            fontFamily: "'Inter Tight', Helvetica",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "19.2px",
                            textTransform: "none",
                            color: "#FFFFFF",
                            background: "transparent",
                            overflow: "hidden",
                            transition: "transform 0.3s",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "5px",
                                zIndex: -1,
                                background: "linear-gradient(240deg, rgba(0, 10, 153, 1) 0%, rgba(0, 17, 255, 1)100%)",
                            },

                            // ::after equivalent
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "5px",
                                zIndex: -1,
                                opacity: 0,
                                background: "linear-gradient(240deg, rgba(0, 17, 255, 1)0%,rgba(0, 8, 126, 1)60%)",
                                transition: "opacity 500ms ease",
                                boxShadow: `5px 5px 18px -3px rgba(0,0,0,1)`,
                            },

                            // Hover / focus / active
                            "&:hover, &:focus, &:active": {
                                transform: "translateY(-1px) translateX(1px)",
                                boxShadow: `50px 50px 58px -20px rgba(0,0,0,0.25)`,
                                "&::after": {
                                    opacity: 1,
                                },
                            },
                        }}

                        onClick={(e) => {
                            e.preventDefault();
                            const form = (e.target as HTMLElement).closest('form');
                            if (!form) return;
                            const inputs = form.querySelectorAll('input');
                            const textareas = form.querySelectorAll('textarea');
                            let isAllValid = true;

                            textareas.forEach((textarea: HTMLTextAreaElement) => {
                                if (textarea.name === 'message')
                                    if (!textarea.validity.valid) {
                                        isAllValid = false;
                                        console.log("textarea");
                                        setMessageError({
                                            isError: true,
                                            message: textarea.validity.valueMissing
                                                ? "To polje je obvezno"
                                                : (textarea.validity.typeMismatch ? "nepravilna vrednost" : "nepravilna vrednost")
                                        })
                                    } else {
                                        setMessageError({
                                            isError: false,
                                            message: ""
                                        })
                                    }
                            })

                            console.log(inputs);
                            inputs.forEach((input: HTMLInputElement) => {
                                if (input.validity.valid) {
                                    switch (input.name) {
                                        case 'email':
                                            console.log("email 1");
                                            setEmailError({
                                                isError: false,
                                                message: ""
                                            });

                                            break;
                                        case 'name':
                                            console.log("name 1");
                                            setNameError({
                                                isError: false,
                                                message: ""
                                            });

                                            break;
                                    }
                                    return;
                                }
                                switch (input.name) {
                                    case 'email':
                                        isAllValid = false;
                                        console.log("email");
                                        setEmailError({
                                            isError: true,
                                            message: input.validity.valueMissing
                                                ? "To polje je obvezno"
                                                : (input.validity.typeMismatch ? "Email naslov ni veljaven" : "nepravilna vrednost")
                                        });
                                        break;
                                    case 'name':
                                        isAllValid = false;
                                        console.log("name");
                                        setNameError({
                                            isError: true,
                                            message: input.validity.valueMissing
                                                ? "To polje je obvezno"
                                                : (input.validity.typeMismatch ? "nepravilna vrednost" : "nepravilna vrednost")
                                        });
                                        break;
                                }
                            });
                            if (isAllValid)
                                onSubmit(form)
                        }}
                    >
                        {t('button.submit')}
                    </Button>
                </Box>

                <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Alert
                        onClose={() => setOpen(false)}
                        severity={_result.severity}

                        variant='filled'
                        sx={{ width: '100%' }}
                    >
                        {_result.message}
                    </Alert>
                </Snackbar>

                <input type="hidden" name="apikey" value="ff128884-df06-4cf3-a507-d9d19b129ea0" />
                <input type="hidden" name="from_name"
                    value="Povpraševanje-spletna stran" /> {/*this is the name of notification in email*/}
            </Box>
        </Paper>
    )
}
