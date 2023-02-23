import supabase from '../../utils/supabase';

function Home({ countries }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()

  return {
    props: {
     countries: data
    },
  }
}

export default Home;