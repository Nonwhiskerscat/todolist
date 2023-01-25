import '../TodolistStyle/TodoBighead.scss';
import titleimg from '../../img/cat2.png'

const yoil= yoils => {
    let newyoil = '';
    switch(yoils) {
        case 0 : newyoil= 'SUN'; break;
        case 1: newyoil= 'MON'; break;
        case 2: newyoil= 'TUE'; break;
        case 3: newyoil= 'WED'; break;
        case 4: newyoil= 'THU'; break;
        case 5: newyoil= 'FRI'; break;
        default: newyoil= 'SAT';
    }

    return newyoil;
}

function TodoBighead({children}) {
    const today=new Date();
    const catday=yoil(today.getDay());

    return ( 
        
        <div className='TodoBighead'>
            <div className='bigtitle'>

                <p>
                    {today.getFullYear()}.{today.getMonth()+1}.{today.getDate()} {catday}
                    <h3 className='todobighead'>TO DO LIST</h3>

                </p>
                <img className='img_title' src={titleimg} alt="#"></img>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default TodoBighead;