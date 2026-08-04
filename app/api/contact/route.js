import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            company,
            service,
            budget,
            message,
        } = body;

        if (!name?.trim() || !email?.trim() || !service || !message?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please complete all required fields.",
                },
                {
                    status: 400,
                }
            );
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please provide a valid email address.",
                },
                {
                    status: 400,
                }
            );
        }

        const submission = {
            name: name.trim(),
            email: email.trim(),
            phone: phone?.trim() || "",
            company: company?.trim() || "",
            service,
            budget: budget || "",
            message: message.trim(),
            submittedAt: new Date().toISOString(),
        };

        /*
          Add Resend, Nodemailer, MongoDB, Sanity,
          or another service here.
    
          For now, the submission appears in your terminal.
        */

        console.log("New contact inquiry:", submission);

        return NextResponse.json(
            {
                success: true,
                message:
                    "Your inquiry has been received. Our team will contact you shortly.",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to process your request. Please try again.",
            },
            {
                status: 500,
            }
        );
    }
}