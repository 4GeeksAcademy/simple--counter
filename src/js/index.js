import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

let time = 0;
let isPaused = false;
let timeDirection = 1;

function resetTime(){
    timeDirection = 1;
    time = 0;
    ReactDOM.render(<Home/>, document.querySelector("#app"));
}

function pauseTime(){
    isPaused = true;
}

function resumeTime(){
    isPaused = false;
}

function countDown(startTime = Number){
    time = startTime;
    timeDirection = 0;
}

function Home(){
	return (
        <div className='background'>
            <div className='header justify-content-center'>
                <div className='d-flex flex-row justify-content-center pt-3'>
                    <h1>
                        Time is counted in hundredths of seconds for faster testing.
                    </h1>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5 justify-content-between'>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="icon bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg>
                        </div>
                    </div>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1>{Math.floor(time%1000000 / 100000)}</h1>
                        </div>
                    </div>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1>{Math.floor(time%100000 / 10000)}</h1>
                        </div>
                    </div>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1>{Math.floor(time%10000 / 1000)}</h1>
                        </div>
                    </div>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1>{Math.floor(time%1000 / 100)}</h1>
                        </div>
                    </div>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1>{Math.floor(time%100 / 10)}</h1>
                        </div>
                    </div>
                    <div className='card bg-dark rounded justify-content-center'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1>{Math.floor(time%10)}</h1>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col'>
                        <button onClick={pauseTime} type='button' className='btn btn-secondary me-2'>Pause</button>
                        <button onClick={resumeTime} type='button' className='btn btn-secondary me-2'>Resume</button>
                        <button onClick={resetTime} type='button' className='btn btn-secondary'>Reset</button>
                    </div>
                    <div className='col-3'>
                        <div className='input-group'>
                        <button onClick={() => countDown(document.getElementById('countDownFrom').value)} type='button' className='btn btn-secondary'> count down from</button>
                            <input className="form-control" id='countDownFrom' type='text' maxlength='6' placeholder='starting point'></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};


function updatePage(){
    if(!isPaused){
        ReactDOM.render(<Home/>, document.querySelector("#app"));
        if (timeDirection == 1){
            time++;
        }
        else{
            time--;
            if (time <= 0){
                time =0;
            }
        } 
    } 
}

setInterval(updatePage, 10)