import '../TodolistStyle/TodoTitle.scss';

function TodoTitle({todos}) {

    const current_entire=todos;
    const current_list=todos.filter(todos=>!todos.checked);
    const current_ratio=(100-current_list.length*100/current_entire.length).toFixed(2);

    if(current_ratio>80) {

    }

    return (
        <div className='TodoHead'>
            <div className='lists_flex'>
                <div className='lists_rest'>총 {current_list.length}개 남았다냥!</div>
                <div className='lists_ratio'>이행률: <span id="tone">{current_ratio}%</span></div>
            </div>
        </div>
    );
}

export default TodoTitle;