import { Component } from 'react';
import FormuleItem from './formuleItem';

class Formule extends Component {
    state = {  }
    render() {
        return (
          <div className='view'>
            <h1>LES FORMULES</h1>
            <div className='formule-container'>
                <FormuleItem title="Découverte" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia.Doloribus qui velit id et dolore est. Laborum fugiat quam optio eveniet. At repellat aut officia earum inventore nisi velit cumque dolor. Autem unde necessitatibus animi sit omnis exercitationem est dolorum quidem. Fugiat temporibus est." km="5" dPlus="120" dMinus="80" />
                <FormuleItem title="Sportif" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia.Doloribus qui velit id et dolore est. Laborum fugiat quam optio eveniet. At repellat aut officia earum inventore nisi velit cumque dolor. Autem unde necessitatibus animi sit omnis exercitationem est dolorum quidem. Fugiat temporibus est." km="10" dPlus="560" dMinus="680" />
                <FormuleItem title="Expert" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia.Doloribus qui velit id et dolore est. Laborum fugiat quam optio eveniet. At repellat aut officia earum inventore nisi velit cumque dolor. Autem unde necessitatibus animi sit omnis exercitationem est dolorum quidem. Fugiat temporibus est." km="20" dPlus="1200" dMinus="1400" />
            </div>
          </div>
        );
    }
}
export default Formule;