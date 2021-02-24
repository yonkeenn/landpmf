import React from 'react';

const  TextCard = (props) => {
return (
    <div className=" br3  db  grow mv1 mh3-l  mh5 w-25-l luz">

        <div className="pa1 bt b--black-10 tc">
            <p className="f6 f5-ns lh-copy measure">{props.contenido}</p>
        </div>
    </div>
    );

}


export default TextCard;






