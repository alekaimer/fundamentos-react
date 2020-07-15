import './App.css'
import React from 'react'

import Counter from './components/counter/Counter';
import Input from './components/forms/Input';
import IndirectDad from './components/communication/IndirectDad';
import DirectDad from './components/communication/DirectDad';
import Students from './components/loops/Students';
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

      <Card titulo="#13 - Counter (Class based)" color="">
        <Counter initialNumber = {17}></Counter>
      </Card>

      <Card titulo="#11 - Controlled Component (Input)" color="">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Indirect communication" color="#836438">
        <IndirectDad></IndirectDad>
      </Card>

      <Card titulo="#09 - Direct communication" color="#500">
        <DirectDad></DirectDad>
      </Card>

      <Card titulo="#06 - Lista" color="">
        <Students></Students>
      </Card>

      <Card titulo="#05 - Componente com filho" color="#039">
        <Family lastName="Kaimer">
          <FamilyMember firstName="Alexandre"></FamilyMember>
          <FamilyMember firstName="Paulo"></FamilyMember>
          <FamilyMember firstName="Marcia"></FamilyMember>
          <FamilyMember firstName="Thiagão"></FamilyMember>
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
