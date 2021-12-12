import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSubjects,  createSubject, updateSubject, deleteSubject} from '../store/actions/subjectActions'





export class SubjectContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = { subjectId: -1, isEdit: false, isAdd: false };
        this.onUpdateSubject = this.onUpdateSubject.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTeacherChange = this.onTeacherChange.bind(this);
        this.onAddSubject = this.onAddSubject.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }
    componentDidUpdate() {
        this.props.getSubjects(this.props.facultyId);
    }
    componentDidMount() {
        this.props.getSubjects(this.props.facultyId);
    }
    ondeleteSubject(id) {
        this.props.deleteSubject(id);
    }
    onUpdateSubject() {
        this.props.updateSubject(this.state.editedSubject);
        this.setState({ isEdit: false });
    }
    onAddSubject() {
        debugger
        this.props.createSubject(this.state.editedSubject);
        this.setState({ isAdd: false });
    }

    onTitleChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({ editedSubject: { id: this.state.editedSubject.id, title: value, teacher: this.state.editedSubject.teacher, facultyId: this.state.editedSubject.facultyId } });
    }
    onTeacherChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({ editedSubject: { id: this.state.editedSubject.id, title: this.state.editedSubject.title, tracher: value, facultyId: this.state.editedSubject.facultyId } });
    }

    onAddClick() {
        if (this.state.isEdit || this.state.isAdd)
            return;
        this.setState({ editedSubject: { id: -1, title: "", teacher: "", facultyId: this.props.facultyId }, isAdd: true });
    }
    onEditClick(id) {
        if (this.state.isEdit || this.state.isAdd)
            return;
        const { subjects } = this.props.subjects;
        let subject = subjects.find(t => t.id === id)
        this.setState({ editedSubject: subject, isEdit: true });
    }

    render() {
        const { subjects } = this.props.subjects
        let updateForm;
        let addButton;
        let addForm;
        if (this.state.isEdit) {
            updateForm =
                <form onSubmit={this.onUpdateSubject}>
                    <input type="text" value={this.state.editedSubject.title} placeholder="Title" onChange={this.onTitleChange}></input>
                    <input type="text" value={this.state.editedSubject.teacher} placeholder="Teacher" onChange={this.onTeacherChange}></input>
                    <div>
                        <input type="submit" value="Update"></input>
                    </div>
                </form>
        }
        else {
            if (!this.state.isAdd)
                addButton = <button onClick={this.onAddClick}>New Subject</button>
            else {
                addForm = <form onSubmit={this.onAddSubject}>
                    <input type="text" value={this.state.editedSubject.title} placeholder="Title" onChange={this.onTitleChange}></input>
                    <input type="text" value={this.state.editedSubject.teacher} placeholder="Teacher" onChange={this.onTeacherChange}></input>
                    <div>
                        <input type="submit" value="Add"></input>
                    </div>
                </form>
            }
        }
        return (
            <div>
                <ol>
                    {subjects.map(p =>
                        <li>
                            <div className="player-in-list">
                                {p.title} {p.teacher}
                                <div className="controls">
                                    <button onClick={() => this.onEditClick(p.id)}>Edit</button>
                                    <button onClick={() => this.ondeleteSubject(p.id)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    )}
                </ol>
                {updateForm}
                {addButton}
                {addForm}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({subjects:state.subjects});

export default connect(mapStateToProps, {getSubjects,  createSubject, updateSubject, deleteSubject})(SubjectContainer);
