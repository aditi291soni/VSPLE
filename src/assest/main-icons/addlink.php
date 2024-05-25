<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class update_link extends CI_Controller {

	
function add_link_record(){
    $config['error'] = '';

    // Check if form is submitted
    if ($_POST) {
        // Validate and sanitize inputs
        $link = $this->input->post('link');

        // You can perform validation checks here before inserting into the database

        // Prepare data for insertion
        $insert_data = array('link' => $link);
        
        // Insert the new record into the "link" table
        $inserted_id = $this->common->insert('links', $insert_data);

        if ($inserted_id) {
            // Set success message and redirect
            $this->session->set_flashdata('msg', 'Link Added Successfully');
            redirect('dashboard');
        } else {
            // Handle insertion failure
            $config['error'] = 'Error Occurred. Please Try Again Later!';
        }
    }

    // Load views for adding a new record to the "link" table
   $this->load->view('header');
		$this->load->view('dashboard/dashboard');
		$this->load->view('footer');
}

// 	function delete_member() { 
// 		$teacher_id = $this->uri->segment(3);
// 		$where = array('teacher_id' => $teacher_id);
// 		$delete = $this->common->delete('teachers_record', $where);
// 		if($delete) {
// 			echo 'success';
// 		}else{
// 			echo 'fail';
// 		}
// 		exit();
// 	}
	
// 	function viewMember(){
// 		$memberid = $this->uri->segment(3);
// 		$where = array('id' => $memberid, 'usertype !='=> '1');
// 		$config['memberresult'] = $this->common->getWhereSingle('users', $where);
		
// 		$this->load->view('subadmin/viewDetails', $config);
// 	}
	
}