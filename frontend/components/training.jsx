import React from 'react'

class Training extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="training-container">
                <div className="training-intro">
                    <h1 id="ad-logo" onClick={() => this.props.history.push('/')}>AD</h1>
                    <h1>GET BIGGER, LEANER, &</h1>
                    <h1 id="stronger">STRONGER</h1>
                    <p>Join now to keep track of personal records and body composition logs to reach your fitness goals!</p>
                    <a href="https://personal-record-tracker.herokuapp.com/session/new">PERSONAL RECORD TRACKER</a>
                    <p id="down-arrow">Or Learn More</p>
                    <p id="down-arrow">↓↓↓</p>
                </div>
                <div className="training-details">
                    <div className="training-details-content">
                        <img src={window.icon1URL}/>
                        <h1>Strength Tracker</h1>
                        <p>Keep track of both your absolute strength and relative strength by logging your 1 rep max and rep max personal records</p>
                    </div>
                    <div className="training-details-content">
                        <img src={window.icon2URL}/>
                        <h1>Body Composition Tracker</h1>
                        <p>Keep track of your body composition. The body composition log will tell you how much lean mass, fat mass, and total bodyweight you gain and lose since the last log</p>
                    </div>
                    <div className="training-details-content">
                        <img src={window.icon3URL}/>
                        <h1>Training Logs</h1>
                        <p>Log training data to see how you progress throughout time</p>
                    </div>
                    <div className="training-details-content">
                        <img src={window.icon4URL}/>
                        <h1>Fitness Assessments</h1>
                        <p>The application will take all the logged data to calculate your fitness levels for muscular strength, muscular endurance, and cardiovascular fitness</p>
                    </div>
                </div>

                <div className="training-details-content-2">
                    <h1>The Most Dependable Fitness Tracker</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>

                    <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. </p>

                    <p>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. </p>

                    <p>Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. </p>
                </div>
            </div>
        )
    }
}

export default Training