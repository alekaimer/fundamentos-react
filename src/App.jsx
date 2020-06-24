import './App.css'
import React from 'react'

import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Fragment from './components/basics/Fragment'
import WithParameter from './components/basics/WithParameter'
import First from './components/basics/First'

export default _ =>
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

      <Card titulo="#05 - Componente com filho" color="#039">
        <Family lastName="Kaimer">
          <FamilyMember firstName="Alexandre"></FamilyMember>
          <FamilyMember firstName="Marcia"></FamilyMember>
        </Family>
      </Card>


      <Card titulo="#04 - Aleatório" color="#080">
        <Aleatorio min={8} max={10} />
      </Card>


      <Card titulo="#03 - Fragmento">
        <Fragment />
      </Card>


      <Card titulo="#02 - Props">
        <WithParameter
          title="Component passando Props"
          aluno="Maria"
          nota={9.9}
        />
        <WithParameter
          title="Component passando Props"
          aluno="João"
          nota={9.9}
        />
      </Card>


      <Card titulo="#01 - First Class">
        <First />
      </Card>


    </div>
  </div>
