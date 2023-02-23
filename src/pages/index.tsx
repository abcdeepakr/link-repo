import supabase from '../../utils/supabase';

export interface HomeProps{
  countries: any;
  country: any; 
  id: any;
  name: any;
}

const Home = (props:HomeProps) => {
  return (
    <ul>
      {props.countries.map((country: HomeProps) => (
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