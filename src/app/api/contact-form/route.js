import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

import prisma from '@/lib/prisma';

export async function POST(request) {
  const body = await request.json();
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alissonpeixer.contato@gmail.com',
      pass: 'svgc uwpd rswq uqzo',
    }
  });

  const mailOptions = {
    from: 'alissonpeixer.contato@gmail.com',
    to: 'alissonpeixer4@gmail.com',
    subject: 'Alisson Peixer - Contato via formulario!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; text-align: center; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="font-size: 16px; color: #555;">
         Email de Contato: ${body.email}
        </p>
        <p style="font-size: 16px; color: #555;">
          Nome: ${body.name}
        </p>
        <p style="font-size: 20px; font-weight: bold; color: #1976d2; background-color: #e3f2fd; padding: 10px; border-radius: 5px; display: inline-block;">
          ${body.message}
        </p>
      </div>
    `,
    attachments: [],
  };

  const data = await prisma.formContact.create({
    data: {
      email: body.email,
      name: body.name,
      text: body.message
    }
  });

  await transporter.sendMail(mailOptions, async (error, info) => {
    
    if (error) {
      console.log('Erro ao enviar e-mail: ', error);
      data.emailSend = false;
    } else {
      console.log('E-mail enviado: ' + info.response);
      data.emailSend = true;
    }

    await prisma.formContact.update({
      where: {
        id: data.id
      },
      data: data
    })
  });

  return NextResponse.json({ message: 'Formulário enviado com sucesso. Obrigado pelo contato!', data: body }, { status: 201 });
}