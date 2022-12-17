import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <section class='p-3 lg:p-8 gap-8 w-1/2 max-w-full my-0 mx-auto flex flex-col justify-center items-center'>
          <Slot />
        </section>
      </main>
    </>
  );
});
