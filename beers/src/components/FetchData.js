import React from "react";


export default class FetchData extends React.Component {
  state = {
    loading: true,
    beer: null
  };


  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    });
    }

  async componentDidMount() {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beer: data , loading: false});
    // this.setState({ person1: data[1] , loading: false});
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.beer) {
      return <div>didn't get a beer</div>;
    }

    return (
      <div>
<header>
<section id="Main-image">
</section>
  <div class="Main-marketing-text">
      
      <h1 className="great">Great Taste </h1> 
      <h1 className="for"><span>For</span></h1>
       <h1 className="moments">Great Moments.. <span role="img" aria-label="sheep">🍻</span></h1>      
      
  </div>

 </header>
 <div className="bannerline">
        <h1>Let's Search !</h1>
        <h1> Which is best for U ?</h1>
      </div>
  
      <div className="beers">
      
        
        
        
          <div className="flex">
          <div className="box">
          <div className="beer">
        <div className="name">{this.state.beer[0].name}</div>
        <img src="https://images.punkapi.com/v2/keg.png" alt="image available" />

        <div className="tagline">"{this.state.beer[0].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[0].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[0].description}</div>
        <div className="Heading">Food Pairing</div>
        
        <div className="FoodPairing">{this.state.beer[0].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[0].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[0].food_pairing[2]}</div>
        

        </div>
        </div>
        

        <div className="box">
        <div className="beer1">
        <div className="name">{this.state.beer[1].name}</div>
        <img src="https://images.punkapi.com/v2/2.png" alt="image available" />
        <div className="tagline">"{this.state.beer[1].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[1].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[1].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[1].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[1].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[1].food_pairing[2]}</div>

        
        </div>
        </div>
        


        <div className="box">
        <div className="beer2">
        <div className="name">{this.state.beer[2].name}</div>
        <img src="https://images.punkapi.com/v2/keg.png" alt="image available" />
        <div className="tagline">"{this.state.beer[2].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[2].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[2].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[2].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[2].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[2].food_pairing[2]}</div>
        
        </div>
        </div>

        </div>



        <div className="flex">

        <div className="box">
        <div className="beer3">
        <div className="name">{this.state.beer[3].name}</div>
        <img src="https://images.punkapi.com/v2/4.png" alt="image available" />
        <div className="tagline">"{this.state.beer[3].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[3].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[3].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[3].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[3].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[3].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer4">
        <div className="name">{this.state.beer[4].name}</div>
        <img src="https://images.punkapi.com/v2/5.png" alt="image available" />
        <div className="tagline">"{this.state.beer[4].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[4].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[4].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[4].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[4].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[4].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer5">
        <div className="name">{this.state.beer[5].name}</div>
        <img src="https://images.punkapi.com/v2/6.png" alt="image available" />
        <div className="tagline">"{this.state.beer[5].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[5].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[5].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[5].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[5].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[5].food_pairing[2]}</div>
        
        </div>
        </div>
        </div>
        
        <div className="flex">  
        
        <div className="box">
        <div className="beer6">
        <div className="name">{this.state.beer[6].name}</div>
        <img src="https://images.punkapi.com/v2/7.png" alt="image available" />
        <div className="tagline">"{this.state.beer[6].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[6].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[6].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[6].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[6].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[6].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer7">
        <div className="name">{this.state.beer[7].name}</div>
        <img src="https://images.punkapi.com/v2/8.png" alt="image available" />
        <div className="tagline">"{this.state.beer[7].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[7].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[7].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[7].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[7].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[7].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer8">
        <div className="name">{this.state.beer[8].name}</div>
        <img src="https://images.punkapi.com/v2/9.png" alt="image available" />
        <div className="tagline">"{this.state.beer[8].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[8].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[8].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[8].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[8].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[8].food_pairing[2]}</div>
        
        </div>
        </div>
        </div>
       
        <div className="flex">
             
        <div className="box">
        <div className="beer9">
        <div className="name">{this.state.beer[9].name}</div>
        <img src="https://images.punkapi.com/v2/10.png" alt="image available" />
        <div className="tagline">"{this.state.beer[9].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[9].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[9].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[9].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[9].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[9].food_pairing[2]}</div>
       
        </div>
        </div>

        <div className="box">
        <div className="beer10">
        <div className="name">{this.state.beer[10].name}</div>
        <img src="https://images.punkapi.com/v2/keg.png" alt="image available" />
        <div className="tagline">"{this.state.beer[10].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[10].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[10].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[10].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[10].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[10].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer11">
        <div className="name">{this.state.beer[11].name}</div>
        <img src="https://images.punkapi.com/v2/12.png" alt="image available" />
        <div className="tagline">"{this.state.beer[11].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[11].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[11].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[11].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[11].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[11].food_pairing[2]}</div>
        
        </div>
        </div>
        </div>
        

        <div className="flex">

        <div className="box">
        <div className="beer12">
        <div className="name">{this.state.beer[12].name}</div>
        <img src="https://images.punkapi.com/v2/13.png" alt="image available" />
        <div className="tagline">"{this.state.beer[12].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[12].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[12].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[12].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[12].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[12].food_pairing[2]}</div>
        
        </div>
        </div>    

        <div className="box">
        <div className="beer13">
        <div className="name">{this.state.beer[13].name}</div>
        <img src="https://images.punkapi.com/v2/14.png" alt="image available" />
        <div className="tagline">"{this.state.beer[13].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[13].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[13].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[13].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[13].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[13].food_pairing[2]}</div>
       
        </div>
        </div> 

        <div className="box">
        <div className="beer14">
        <div className="name">{this.state.beer[14].name}</div>
        <img src="https://images.punkapi.com/v2/15.png" alt="image available" />
        <div className="tagline">"{this.state.beer[14].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[14].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[14].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[14].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[14].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[14].food_pairing[2]}</div>
        
        </div>
        </div>
        </div>


        <div className="flex">

        <div className="box">
        <div className="beer15">
        <div className="name">{this.state.beer[15].name}</div>
        <img src="https://images.punkapi.com/v2/16.png" alt="image available" />
        <div className="tagline">"{this.state.beer[15].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[15].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[15].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[15].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[15].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[15].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer16">
        <div className="name">{this.state.beer[16].name}</div>
        <img src="https://images.punkapi.com/v2/17.png" alt="image available" />
        <div className="tagline">"{this.state.beer[16].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[16].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[16].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[16].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[16].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[16].food_pairing[2]}</div>
        
        </div>
        </div>


        <div className="box">
        <div className="beer17">
        <div className="name">{this.state.beer[17].name}</div>
        <img src="https://images.punkapi.com/v2/18.png" alt="image available" />
        <div className="tagline">"{this.state.beer[17].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[17].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[17].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[17].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[17].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[17].food_pairing[2]}</div>
        
        </div>
        </div>
        </div>

        <div className="flex">

        <div className="box">
        <div className="beer18">
        <div className="name">{this.state.beer[18].name}</div>
        <img src="https://images.punkapi.com/v2/19.png" alt="image available" />
        <div className="tagline">"{this.state.beer[18].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[18].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[18].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[18].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[18].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[18].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer19">
        <div className="name">{this.state.beer[19].name}</div>
        <img src="https://images.punkapi.com/v2/keg.png" alt="image available" />
        <div className="tagline">"{this.state.beer[19].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[19].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[19].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[19].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[19].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[19].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer20">
        <div className="name">{this.state.beer[20].name}</div>
        <img src="https://images.punkapi.com/v2/keg.png" alt="image available" />
        <div className="tagline">"{this.state.beer[20].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[20].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[20].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[20].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[20].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[20].food_pairing[2]}</div>
        
        </div>
        </div>
        </div>

        <div className="flex">

        <div className="box">
        <div className="beer21">
        <div className="name">{this.state.beer[21].name}</div>
        <img src="https://images.punkapi.com/v2/22.png" alt="image available" />
        <div className="tagline">"{this.state.beer[21].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[21].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[21].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[21].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[21].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[21].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer22">
        <div className="name">{this.state.beer[22].name}</div>
        <img src="https://images.punkapi.com/v2/23.png" alt="image available" />
        <div className="tagline">"{this.state.beer[22].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[22].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[22].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[22].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[22].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[22].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer23">
        <div className="name">{this.state.beer[23].name}</div>
        <img src="https://images.punkapi.com/v2/24.png" alt="image available" />
        <div className="tagline">"{this.state.beer[23].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[23].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[23].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[23].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[23].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[23].food_pairing[2]}</div>
        
        </div>
        </div>

        <div className="box">
        <div className="beer24">
        <div className="name">{this.state.beer[24].name}</div>
        <img src="https://images.punkapi.com/v2/25.png" alt="image available" />
        <div className="tagline">"{this.state.beer[24].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[24].abv}</div>
        <div className="Heading">Description</div>
        <div className="description">{this.state.beer[24].description}</div>
        <div className="Heading">Food Pairing</div>
        <div className="FoodPairing">{this.state.beer[24].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[24].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[24].food_pairing[2]}</div>
        
        </div>
        </div>

        </div>
        </div>






<div className="Footer">
<footer class="page-footer #000000 black">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">OUR CONTACTS</h5>
                <p class="grey-text text-lighten-4"></p>
                <p>1234567890</p>
                <p>info@yoursite.com</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Shop</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          
        </footer>
        </div>
        </div>

    );
  }
}




