import React from 'react';
import ReactDom from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePosition } from '../imports/api/players';
import App from '../imports/ui/app';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {
            sort: {
                score: -1
            }
        }).fetch();
        let positionedPlayers = calculatePosition(players);
        let title = 'Score Keep';
        ReactDom.render(
        <App 
        title={title} 
        players={positionedPlayers} />,
        document.getElementById('app')
        );
    });
});
