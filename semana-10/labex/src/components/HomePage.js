import React from 'react';
import {LoginPage} from './LoginPage'
import {ApplicationFormPage} from './ApplicationFormPage'

export function HomePage() {
  return (
   <div>
    <p>Sou o HomePage</p>
    <LoginPage/>
    <ApplicationFormPage/>
    </div>
  );
}