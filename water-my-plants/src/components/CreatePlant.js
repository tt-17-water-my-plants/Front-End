import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './CreatePlantSchema'
import styled from 'styled-components'

const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    .errors {
        color: red;
    }
`

const initialFormValues = {
    nickName: '',
    species: '',
    water: '',
    image: '',
}
const initialErrors = {
    nickName: '',
    species: '',
    water: '',
}

export default function CreatePlant() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true)

    const change = evt => {
        const { name, value } = evt.target
        console.log(evt.target)

        yup
        .reach(schema, name) 
        .validate(value) 
        .then(() => {
        setErrors({
            ...errors,
            [name]: "",
        });
        })
        .catch((err) => {
        setErrors({
            ...errors,
            [name]: err.errors[0],
        });
        });

        setFormValues({...formValues, [name]: value})
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);


    return (
       <Container>
        {/* Icon here? */}
        <h2>Create New Plant!</h2>
        <Form>
            <label>Nick Name
                <input
                    type='text'
                    name='nickName'
                    value={formValues.nickName}
                    onChange={change}
                />            
                <div className='errors'>{errors.nickName}</div>
            </label>
            <label>Species 
                <select type='text' name='species' value={formValues.species} onChange={change}>
                    <option disabled value='' >--SELECT--</option>
                    <option disabled>--TROPICAL AND SUBTROPICAL--</option>
                    <option value='Aglaonema'>{'Aglaonema (Chinese evergreen)'}</option>
                    <option value='Alocasia'>{'Alocasia'}</option>
                    <option value='Anthurium'>{'Anthurium'}</option>
                    <option value='Aphelandra squarrosa'>{'Aphelandra squarrosa (zebra plant)'}</option>
                    <option value='Araucaria heterophylla'>{'Araucaria heterophylla (Norfolk Island pine)'}</option>
                    <option value='Asparagus aethiopicus'>{'Asparagus aethiopicus (asparagus fern)'}</option>
                    <option value='Aspidistra elatior'>{'Aspidistra elatior (cast iron plant)'}</option>
                    <option value='Begonia'>{'Begonia'}</option>
                    <option value='Bromeliaceae'>{'Bromeliaceae (bromeliads)'}</option>
                    <option value='Calathea'>{'Calathea (prayer plants)'}</option>
                    <option value='Chamaedorea elegans'>{'Chamaedorea elegans (parlor palm)'}</option>
                    <option value='Dypsis lutescens'>{'Dypsis lutescens (areca palm)'}</option>
                    <option value='Chlorophytum comosum'>{'Chlorophytum comosum (spider plant)'}</option>
                    <option value='Citrus'>{'Citrus'}</option>
                    <option value='Cyclamen'>{'Cyclamen'}</option>
                    <option value='Dracaena'>{'Dracaena'}</option>
                    <option value='Dieffenbachia'>{'Dieffenbachia (dumbcane)'}</option>
                    <option value='Epipremnum aureum'>{'Epipremnum aureum (golden pothos)'}</option>
                    <option value='Ficus benjamina'>{'Ficus benjamina (weeping fig)'}</option>
                    <option value='Ficus elastica'>{'Ficus elastica (rubber plant)'}</option>
                    <option value='Ficus lyrata'>{'Ficus lyrata (fiddle-leaf fig)'}</option>
                    <option value='Hippeastrum'>{'Hippeastrum'}</option>
                    <option value='Hoya '>{'Hoya'}</option>
                    <option value='Mimosa pudica'>{'Mimosa pudica'}</option>
                    <option value='Nephrolepis exaltata'>{'Nephrolepis exaltata (Boston fern)'}</option>
                    <option value='Orchidaceae'>{'Orchidaceae (orchids)'}</option>
                    <option value='Peperomia'>{'Peperomia'}</option>
                    <option value='Philodendron'>{'Philodendron'}</option>
                    <option value='Maranta'>{'Maranta (prayer plant)'}</option>
                    <option value='Monstera'>{'Monstera (Swiss cheese plant)'}</option>
                    <option value='Sansevieria trifasciata'>{"Sansevieria trifasciata (mother-inlaw's tongue)"}</option>
                    <option value='Schefflera arboricola'>{'Schefflera arboricola (umbrella plant)'}</option>
                    <option value='Sinningia speciosa'>{'Sinningia speciosa (gloxinia)'}</option>
                    <option value='Spathiphyllum'>{'Spathiphyllum (peace lily)'}</option>
                    <option value='Stephanotis floribunda'>{'Stephanotis floribunda (Madagascar jasmine)'}</option>
                    <option value='Streptocarpus'>{'Streptocarpus'}</option>
                    <option value='Tradescantia zebrina'>{'Tradescantia zebrina (purple wandering Jew)'}</option>
                    <option value='Pilea peperomioides'>{'Pilea peperomioides'}</option>
                    <option value='Scindapsus pictus'>{'Scindapsus pictus (satin pothos)'}</option>
                    <option value='Yucca'>{'Yucca'}</option>
                    <option disabled>--SUCCULENTS--</option>
                    <option value='Aloe vera'>{'Aloe vera'}</option>
                    <option value='Cactaceae'>{'Cactaceae (cacti)'}</option>
                    <option value='Crassula ovata'>{'Crassula ovata (jade plant)'}</option>
                    <option value='Echeveria'>{'Echeveria'}</option>
                    <option value='Haworthia'>{'Haworthia'}</option>
                    <option value='Senecio angulatus'>{'Senecio angulatus (creeping groundsel)'}</option>
                    <option value='Senecio rowleyanus'>{'Senecio rowleyanus (string of pearls)'}</option>
                    <option disabled>--AIR PLANTS--</option>
                    <option value='Tillandsia xerographica'>{'Tillandsia xerographica'}</option>
                    <option value='Tillandsia ionantha'>{'Tillandsia ionantha'}</option>
                    <option value='Tillandsia bulbosa'>{'Tillandsia bulbosa'}</option>
                    <option value='Tillandsia caput medusae'>{'Tillandsia caput medusae'}</option>
                    <option disabled>--FORCED BULBS--</option>
                    <option value='Crocus'>{'Crocus'}</option>
                    <option value='Hyacinthus'>{'Hyacinthus (hyacinth)'}</option>
                    <option value='Narcissus'>{'Narcissus (narcissus or daffodil)'}</option>
                    <option disabled>--TEMPERATES--</option>
                    <option value='Hedera helix'>{'Hedera helix (English ivy)'}</option>
                    <option value='Saxifraga stolonifera'>{'Saxifraga stolonifera (strawberry begonia)'}</option>                  
                </select>        
                <div className='errors'>{errors.species}</div>  
            </label>
            <label>H<sub>2</sub>O frequency
                <input
                    type='text'
                    name='water'
                    value={formValues.water}
                    onChange={change}
                />            
                <div className='errors'>{errors.water}</div>
            </label>
            <label>{'Image (optional)'}
                <input
                    type='file'
                    name='image'
                    value={formValues.image}
                    onChange={change}
                />            
            </label>
            <button disabled={disabled}>Create</button>
        </Form>
       </Container>
    )
}
