
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({

            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }
        })

        const adminmailOptions = {
            from: 'You I Lab <youilab.ipi@gmail.com>',
            to: process.env.NODEMAILER_EMAIL,
            cc: process.env.NODEMAILER_CC,
            subject: "You I Lab",
            html: `
            <div style="background-color: rgb(250, 250, 250); --darkreader-inline-bgcolor: #161819;" data-darkreader-inline-bgcolor="">
<table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0px; padding: 0px; width: 100%; height: 100%; background-position: center top; background-color: rgb(250, 250, 250); --darkreader-inline-bgcolor: #161819;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td valign="top" style="padding:0">
<table cellpadding="0" cellspacing="0" align="center" style="border-collapse: collapse; border-spacing: 0px; width: 100%; background-color: transparent; background-position: center top; --darkreader-inline-bgcolor: transparent;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td align="center" style="padding:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px; --darkreader-inline-bgcolor: transparent;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td align="left" bgcolor="#2B2C2C" style="padding: 20px; background-color: rgb(43, 44, 44); border-radius: 10px 10px 0px 0px; --darkreader-inline-bgcolor: #1c1e20;" data-darkreader-inline-bgcolor="">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td valign="top" align="center" style="padding:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td align="center" style="padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;font-size:0px"><a href="https://mhc.ipicyt.edu.mx" style="text-decoration: underline; color: rgb(102, 102, 102); font-size: 14px; --darkreader-inline-color: #aaa296;" target="_blank"  data-darkreader-inline-color=""><img src="https://mhc.ipicyt.edu.mx/assets/images/sponsor/youILab.png" alt="Logo" style="border: 0px; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" title="Logo" height="66" class="CToWUd" data-bit="iit" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></a></td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse;border-spacing:0px;width:100%">
<tbody><tr>
<td align="center" style="padding:0">
<table align="center" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px; --darkreader-inline-bgcolor: transparent;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td align="left" bgcolor="#2B2C2C" style="padding: 15px 20px 0px; background-color: rgb(43, 44, 44); --darkreader-inline-bgcolor: #1c1e20;" data-darkreader-inline-bgcolor="">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td align="center" valign="top" style="padding:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td align="left" style="padding:0;padding-top:10px;padding-bottom:10px">
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Hola, </p>

<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color=""> Se ha recibido un nuevo mensaje a través del formulario de contacto en la página web. Aquí están los detalles del remitente: </p>

<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Nombre Completo: ${name} </p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Correo Electronico: ${email} </p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Telefono: ${subject}</p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Mensaje: ${message}</p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color=""></p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color=""></p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Por favor, ponte en contacto con ${name} tan pronto como sea posible.</p>
<p style="line-height: 23px; color: rgb(255, 255, 255); font-size: 15px; --darkreader-inline-color: #edebe8;" data-darkreader-inline-color="">Saludos</p>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table cellpadding="0" cellspacing="0" align="center" style="border-collapse: collapse; border-spacing: 0px; width: 100%; background-color: transparent; background-position: center top; --darkreader-inline-bgcolor: transparent;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td align="center" style="padding:0">
<table align="center" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px; --darkreader-inline-bgcolor: transparent;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td align="left" bgcolor="#2B2C2C" style="padding: 0px 20px 20px; background-color: rgb(43, 44, 44); border-radius: 0px 0px 10px 10px; --darkreader-inline-bgcolor: #1c1e20;" data-darkreader-inline-bgcolor="">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td align="left" style="padding:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td align="center" style="padding:20px;font-size:0">
<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>

<td align="center" valign="top" style="padding:0;padding-right:25px"><a href="https://www.linkedin.com/company/ipicyt/" style="text-decoration: underline; color: rgb(51, 51, 51); font-size: 12px; --darkreader-inline-color: #ccc6bf;" target="_blank"  data-darkreader-inline-color=""><img title="Linkedin" src="https://vhoarf.stripocdn.email/content/assets/img/social-icons/logo-gray/linkedin-logo-gray.png" alt="In" width="24" style="border: 0px; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" class="CToWUd" data-bit="iit" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></a></td>


<td align="center" valign="top" style="padding:0;padding-right:25px"><a href="https://www.facebook.com/youilab" style="text-decoration: underline; color: rgb(51, 51, 51); font-size: 12px; --darkreader-inline-color: #ccc6bf;" target="_blank" data-darkreader-inline-color=""><img title="Facebook" src="https://vhoarf.stripocdn.email/content/assets/img/social-icons/logo-gray/facebook-logo-gray.png" alt="Ig" width="24" style="border: 0px; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" class="CToWUd" data-bit="iit" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></a></td>

<td align="center" valign="top" style="padding:0;padding-right:25px"><a href="https://twitter.com/youi_lab" style="text-decoration: underline; color: rgb(51, 51, 51); font-size: 12px; --darkreader-inline-color: #ccc6bf;" target="_blank" data-darkreader-inline-color=""><img title="Facebook" src="https://vhoarf.stripocdn.email/content/assets/img/social-icons/logo-gray/x-logo-gray.png" alt="Ig" width="24" style="border: 0px; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" class="CToWUd" data-bit="iit" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></a></td>


</tr>
</tbody></table>
</td>
</tr>
<tr>
<td align="center" style="padding:0">
<p style="line-height: 18px; color: rgb(153, 153, 153); font-size: 12px; --darkreader-inline-color: #aaa296;" data-darkreader-inline-color="">You I Lab, Camino a la Presa San José 2055, Lomas 4a sección, 78216 San Luis Potosi, S.LP México</p>
<p style="line-height: 18px; color: rgb(153, 153, 153); font-size: 12px; --darkreader-inline-color: #aaa296;" data-darkreader-inline-color=""></p>
</td>
</tr>
<tr>
<td style="padding:0">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>
<td align="center" valign="top" width="33.33%" style="padding: 5px; border: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""><a href="#" style="text-decoration: none; color: rgb(153, 153, 153); font-size: 12px; --darkreader-inline-color: #aaa296;" target="_blank" data-darkreader-inline-color="">Visítanos</a></td>

<td align="center" valign="top" width="33.33%" style="padding: 5px; border-width: 0px 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-image: initial; border-left-style: solid; border-left-color: rgb(153, 153, 153); --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: #4a5154;" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""><a href="#" style="text-decoration: none; color: rgb(153, 153, 153); font-size: 12px; --darkreader-inline-color: #aaa296;" target="_blank" data-darkreader-inline-color="">Política de Privacidad</a></td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse;border-spacing:0px;width:100%">
<tbody><tr>
<td align="center" style="padding:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0px; background-color: rgb(255, 255, 255); width: 600px; --darkreader-inline-bgcolor: #131516;" data-darkreader-inline-bgcolor="">
<tbody><tr>
<td align="left" style="padding:0;padding-top:15px">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
<tbody><tr>

</td>
</tr>
</tbody></table></div>
      `,
        };

        const userMailOptions = {
            from: 'You I Lab <youilab.ipi@gmail.com>',
            to: email,
            subject: "Gracias por tu mensaje",
            html: `
                <p>Hola ${name},</p>
                <p>Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
                <p>Saludos,</p>
                <p>You I Lab</p>
            `
        };

        await transporter.sendMail(adminmailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }

}