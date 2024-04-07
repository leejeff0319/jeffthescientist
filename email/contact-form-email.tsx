import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import {Tailwind} from "@react-email/tailwind";

type ContactFormEmailProps= {
    senderEmail: string;
    senderMessage: string;
    senderName: string;
}

export default function ContactFormEmail({
    senderEmail,
    senderMessage,
    senderName
}: ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>New message from JeffTheScientist</Preview>
    <Tailwind>
        <Body className="text-black">
            <Container>
                <Section className="text-black">
                    <Heading className="leading-tight">
                        You received the following message from {senderName}
                    </Heading>
                    <Text>{senderMessage}</Text>
                    <Hr />
                    <Text> The sender's email is: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}
