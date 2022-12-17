import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Card from '../components/card/card'

export default component$(() => {
  return (
    <div>
      <Card />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Blog',
  meta: [
    {
      name: 'description',
      content: 'Qwik site blog page',
    },
  ],
};
