import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            company,
            website,
            service,
            budget,
            message,
        } = body;

        if (!name?.trim() || !email?.trim() || !service || !message?.trim()) {
            return Response.json(
                { message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Creative Fox" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO,
            replyTo: email,
            subject: `New Project Inquiry — ${name}`,
            html: `
                <h2>New Project Inquiry</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || "Not provided"}</p>
                <p><strong>Website:</strong> ${website || "Not provided"}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Budget:</strong> ${budget || "Not provided"}</p>

                <h3>Message</h3>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

        return Response.json({
            message: "Thanks! We’ll get back to you shortly.",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return Response.json(
            { message: "Unable to send your message. Please try again." },
            { status: 500 }
        );
    }
}