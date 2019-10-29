import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Unity, { UnityContent } from "react-unity-webgl";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  tableWrapper: {
    overflowX: 'auto',
    padding: theme.spacing(3),
    maxWidth: 1200,
    margin: '50px auto 0 auto'
  },
});

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageUnity: "",
    };

    this.unityContent = new UnityContent(
      "src/game/Unity/BuildInfo/Build/BuildInfo.json",
      "src/game/Unity/BuildInfo/Build/UnityLoader.js"
    );

    this.unityContent.on("DoInteraction", message => {
      this.setState({messageUnity: message});
      console.log("Wow Unity said: " + this.state.messageUnity);
    });
  }

  sendMsgToUnity(){
        
    let eirbmonInfo = {
      Pokemons: [{
        type: "Pikachu",
        name: "Gribouille",
        color: "Black",
        position_x: -56.5,
        position_y: 4.1,

      },
      {
        type: "Carapuce",
        name: "Artpick",
        color: "Silver",
        position_x: -57.44,
        position_y: 4.2,

      },
      {
        type: "Salameche",
        name: "Loustick",
        color: "Purple",
        position_x: -55.5,
        position_y: 4.1,

      }
    ]
    }; 
    this.unityContent.send("GeneratePokemon", "GenerateFirstPokemon", JSON.stringify(eirbmonInfo));
  }
  
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.tableWrapper}>
        <h1> Eirbmon </h1>
        <div>
        <Button variant="outlined" color="primary" onClick={()=>this.sendMsgToUnity()}>
          Send Eirbmon to Unity
        </Button>
        </div>
        <div>
          <Unity unityContent={this.unityContent} />
        </div>
        Message from unity : {this.state.messageUnity}
      </div>)
  }
} export default withStyles(styles)(Game);