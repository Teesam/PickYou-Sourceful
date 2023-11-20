export const isWithinValueRange = (value: string, from: string): string => {
    let statement = 'true'

    if(from.toLowerCase() === 'attribute'){
        if(Number(value) > 1){
            statement = 'Attribute weight cannot be greater than 1'
        }else if(Number(value) < 0){
            statement = 'Attribute weight cannot be less than 0'
        }else{
            statement = "Good"
        }
    }else if(from.toLowerCase() === 'choice'){
        if(Number(value) > 100){
            statement = 'Attribute score cannot be greater than 100'
        }else if(Number(value) < 0){
            statement = 'Attribute score cannot be less than 0'
        }else{
            statement = "Good"
        }
    }
  
    return statement;
}