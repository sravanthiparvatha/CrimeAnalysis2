import React from 'react';
import request from 'superagent';

class UserProfile1 extends React.Component {
    render() {
        return (<br/>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12 lead">
                                            Edit user profile
                <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <div id="img-preview-block" className="img-circle avatar avatar-original center-block" style="background-size:cover; 
                                                background-image: url(http://robohash.org/sitsequiquia.png?size=120x120)"></div>
                                        <br/>
                                            <span className="btn btn-link btn-file">Edit avatar <input type="file" id="upload-img"></span>
              </div>
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <label for="user_last_name">Last name</label>
                                                    <input type="text" className="form-control" id="user_last_name">
                </div>
                                                    <div className="form-group">
                                                        <label for="user_first_name">First name</label>
                                                        <input type="text" className="form-control" id="user_first_name">
                </div>
                                                        <div className="form-group">
                                                            <label for="user_middle_name">Middle name</label>
                                                            <input type="text" className="form-control" id="user_middle_name">
                </div>


                                                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#delete-user-modal">
                                                                Delete user
                </button>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <hr />
                                                            <button className="btn btn-primary pull-right"><i className="glyphicon glyphicon-floppy-disk"></i> Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
      </div>
                                    </div>
                                </div>
                                <div id="delete-user-modal" className="modal fade">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <p>Are you sure you want to delete account?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>

                                    );
    }
    }
    export default UserProfle1;