

export default function Packages(props) {

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                    <ul>
                    {props.packages.map((element,i )=> <p style={{fontSize:"20px"}} key ={i}>{element} </p>)}
                </ul>
                </div>
                
            </div>
        </div>
    )
}