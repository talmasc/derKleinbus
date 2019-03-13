import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({groups}) => (
    <div className="row">

        {groups.map(group=>(
            <ConnectedTaskList key={group.id} id={group.id} name={group.name} className="col"/>
        ))}
    </div>
)

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard);