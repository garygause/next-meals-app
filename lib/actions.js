'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

export async function shareMeal(prevFormState, formData) {
  const meal = {
    title: formData.get('title'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  };

  // basic validtion handling example
  if (!title || title.trim() === '') {
    return {
      message: 'Invalid input',
    };
  }
  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}
