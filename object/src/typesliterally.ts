//Alinhar texto
function readText(
    text: string, 
    align: "left" | "rigth" | "center"
) {
  return `<div style='text-align: ${align}'>${text}</div>`;
}

readText("Henry", "left");
//readText("Henry", "cefgdnter");
//error

//Definir tamanho da DIV
type Option = {
    width: number,
    heigth: number
};

function config(props: Option | 'auto'){
    if (props == 'auto'){
        return `<div style='width: ${props}; height: ${props}'></div>`;
    }
    else{
        return `<div style='width: ${props.width}; height: ${props.heigth}'></div>`;
    }
}

config('auto');

//config('retywer5');
//error
