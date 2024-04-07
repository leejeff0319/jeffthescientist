"use server";
import React from "react";
import {Resend} from "resend";
import {validateString} from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) =>{
    const senderName = formData.get('senderName');
    const senderEmail = formData.get('senderEmail');
    const senderMessage = formData.get('senderMessage');

    // server-side validatoin
    if (!validateString(senderName, 500)) {
        return{
            error: "Invalid sender name"
        }
    }
    if (!validateString(senderEmail, 500)) {
        return{
            error: "Invalid sender email"
        }
    }

    if (!validateString(senderMessage, 10000)) {
        return{
            error: "Invalid sender message"
        }
    }

    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.net>',
            to: 'leejeff0319@gmail.com'  ,
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            // text: "From: " + senderName as string + "\n\n" + senderMessage as string
            react: React.createElement(ContactFormEmail, {
                senderMessage: senderMessage as string,
                senderName: senderName as string,
                senderEmail: senderEmail as string
            }) 
            //react: <ContactFormEmail senderMessage={senderMessage} senderEmail={senderEmail} senderName={senderName}/>
        })
    } catch (error: unknown){
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    };
}