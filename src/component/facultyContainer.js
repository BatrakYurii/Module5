import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFaculty, createFaculty, updateFaculty, deleteFaculty} from '../store/actions/facultyActions'
import SubjectContainer from './subjectContainer'
import './styles/facultyStyle.css'

class FacultyContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = { editedFaculty: { id: -1, title: "", budget: "" }, isUpdate: false, isAdd: false, selectedFaculty: { id: -1, title: "", budget: "" } };
        this.onEditClick = this.onEditClick.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onUpdateFaculty = this.onUpdateFaculty.bind(this);
        this.onBudgetChange = this.onBudgetChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
        this.onAddFaculty = this.onAddFaculty.bind(this);
        this.OnFacultyIdClick = this.OnFacultyIdClick.bind(this);

    }


    componentDidMount(){
        this.props.getFaculty();
    }

    onAddFaculty() {
        debugger
        this.props.createFaculty(this.state.editedFaculty);
        this.setState({ isAdd: false });
    }

    onDeleteFaculty(id) {
        if (this.state.isAdd === true || this.state.isUpdate === true)
            return;
        this.props.deleteFaculty(id);
    }

    onUpdateFaculty() {
        debugger
        this.props.updateFaculty(this.state.editedFaculty);
        this.setState({ isUpdate: false });
    }

    onEditClick(id) {
        this.setState({selectedFaculty: { id: -1, title: "", budget: "" }});
        if (this.state.isAdd === true || this.state.isUpdate === true)
            return;
        const { faculties } = this.props.faculties;
        let faculty = faculties.find(t => t.id === id)
        this.setState({ editedFaculty: { id: faculty.id, title: faculty.title, budget: faculty.budget }, isUpdate: true });
    }

    onAddClick() {
        this.setState({ isAdd: true, isUpdate: false, editedFaculty: { id: -1, title: "", budget: "" },selectedFaculty: { id: -1, title: "", budget: "" } })
    }

    onTitleChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({ editedFaculty: { id: this.state.editedFaculty.id, title: value, budget: this.state.editedFaculty.budget } });
    }

    onBudgetChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({ editedFaculty: { id: this.state.editedFaculty.id, title: this.state.editedFaculty.title, budget: value } });
    }

    OnFacultyIdClick(tid) {
        const { faculties } = this.props.faculties;
        let faculty = faculties.find(t => t.id === tid)
        this.setState({ selectedFaculty: faculty, isAdd: false, isUpdate: false});
    }

    render(){
    
        const { faculties } = this.props.faculties;
        let updateForm;
        let createForm;
        let addButton;
        let subjects;
        if(this.state.selectedFaculty.id!==-1)
        {
            subjects = <div><h3>{this.state.selectedFaculty.title}</h3><SubjectContainer facultyId={this.state.selectedFaculty.id} /></div>
        }
        if (this.state.isUpdate) {
            updateForm =
                <form onSubmit={this.onUpdateFaculty}>
                    <input type="text" value={this.state.editedFaculty.title}   placeholder = "Title" onChange={this.onTitleChange}></input>
                    <input type="text" value={this.state.editedFaculty.budget}  placeholder = "Budget" onChange={this.onBudgetChange}></input>
                    <div>
                        <input type="submit" value="Update"></input>
                    </div>
                </form>
        }
        else {
            if (!this.state.isAdd) {
                addButton = <button onClick={this.onAddClick}>New Faculty</button>
            }
            else {
                createForm = <form onSubmit={this.onAddFaculty}>
                    <input type="text" value={this.state.editedFaculty.name} placeholder = "Title" onChange={this.onTitleChange}></input>
                    <input type="text" value={this.state.editedFaculty.country}  placeholder = "Budget" onChange={this.onBudgetChange}></input>
                    <div>
                        <input type="submit" value="Add"></input>
                    </div>
                </form>
            }
        }

        return  <div className="container">
        <div className="info">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Budget</th>
                </tr>
                {faculties.map(t => {
                    return <tr>
                        <td><button onClick={() => this.OnFacultyIdClick(t.id)}>{t.id}</button></td>
                        <td>{t.title}</td>
                        <td>{t.budget}</td>
                        <td>
                            <button onClick={() => this.onEditClick(t.id)} className="table-button">Edit</button>
                        </td>
                        <td>
                            <button onClick={() => this.onDeleteFaculty(t.id)} className="table-button">Delete</button>
                        </td>
                    </tr>
                }
                )}
            </table>
            {addButton}
        </div>
        <div className="players-list">
             {subjects}
        </div>
        <div className="form">{updateForm}{createForm}</div>
    </div>
    }
}

const mapStateToProps  = (state) => ({faculties: state.faculties});

export default connect(mapStateToProps, {getFaculty, updateFaculty, createFaculty, deleteFaculty})(FacultyContainer);