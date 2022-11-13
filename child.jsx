const child=({name,add})=>
{
    return (
        <>
        <h1>name {name} and address is {add}</h1>
        </>
    )
}
const First=({name1,add1})=>
{
    return (
        <>
        <h1>name {name1} and address is {add1}</h1>
        </>
    )
}

const Second=()=>
{
    return <h1>This is Second</h1>
}
export default child;
export { First,Second };