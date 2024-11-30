import { companies } from '@/data/companies';
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the first company by default
  redirect(`/${companies[0].id}`);
}