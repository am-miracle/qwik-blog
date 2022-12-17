import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';


export default component$(() => {
    const location = useLocation();

  return (
    <article>
        <figure>
            <img src='' alt='' />
        </figure>
        <div>
            <img src='' alt='' />
            <div>
                <h2>Pathname: {location.pathname}</h2>
                <p>Sku Id: {location.params.skuId}</p>
            </div>
        </div>
    </article>
  );
});