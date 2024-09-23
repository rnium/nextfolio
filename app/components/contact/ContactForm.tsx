"use client"

import { useEffect } from 'react'
import { Formik, getIn } from 'formik';
import * as Yup from 'yup'
import Input from '../(shared)/Input';
import { RiSendPlaneLine as RiSendPlaneLine, RiLoader3Line } from '@remixicon/react';
import { Grid2 as Grid } from '@mui/material';
import { useToast } from '@/hooks/use-toast';
import { usePost } from '@/hooks/use-api';
import { endpoints } from '@/lib/api_data';

const ContactForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required().min(3).max(100),
        email: Yup.string().email().required(),
        subject: Yup.string().required().min(3).max(250),
        body: Yup.string().required("Message body is required").min(3, 'Min length is 3').max(10000, 'Max length is 10000'),
    })
    const { toast } = useToast();
    const { success, error, loading, perform_post } = usePost(endpoints.sendmessage);

    useEffect(() => {
        if (success) {
            toast({
                title: 'Message Sent',
                description: "Rony appreciates your message and extends his heartfelt thanks"
            })
        }
        if (error) {
            toast({
                title: error?.title || 'Sorry.. :(',
                description: error?.description || JSON.stringify(error),
                variant: 'destructive'
            })
        }
    }, [success, error])

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                body: ''
            }}
            validationSchema={validationSchema}
            onSubmit={
                (values, { resetForm }) => {
                    perform_post(values);
                    resetForm();
                }
            }
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Grid container
                        spacing={2}
                    >
                        <Grid
                            size={{ xs: 6 }}
                        >
                            <Input
                                label="Your Name"
                                fullWidth
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.name && errors?.name)}
                                helperText={Boolean(touched?.name && errors?.name) && errors?.name}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 6 }}
                        >
                            <Input
                                label="Your Email"
                                fullWidth
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.email && errors?.email)}
                                helperText={Boolean(touched?.email && errors?.email) && errors?.email}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12 }}
                        >
                            <Input
                                label="Subject"
                                fullWidth
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.subject && errors?.subject)}
                                helperText={Boolean(touched?.subject && errors?.subject) && errors?.subject}

                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12 }}
                        >
                            <Input
                                label="Message"
                                fullWidth
                                multiline
                                rows={5}
                                name="body"
                                value={values.body}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.body && errors?.body)}
                                helperText={Boolean(touched?.body && errors?.body) && errors?.body}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12 }}
                        >
                            <div>
                                <button
                                    className={loading ? "btn-secondary" : "btn-primary"}
                                    disabled={loading}
                                    type="submit"
                                    onClick={e => handleSubmit()}
                                >

                                    <span>Send Message</span>
                                    {
                                        loading ?
                                            <RiLoader3Line
                                                className='animate-spin'
                                                size={25}
                                            />
                                            :
                                            <RiSendPlaneLine
                                                size={20}
                                            />
                                    }
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                )
            }
        </Formik>
    )
}

export default ContactForm