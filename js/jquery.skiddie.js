/* ------------------------------------------------------------------------
 Class: jquery.skiddie.js
 Author: Mehmet INCE - @mmetince
 Version: 1.0.0
 ------------------------------------------------------------------------- */
$(document).ready(function(){
    var variable_list = new Array();
    variable_list.push({name : 'current_client_id', val : 17});
    variable_list.push({name : 'member_unique_id', val : 284});
    variable_list.push({name : 'session_identity', val : 4547});
    variable_list.push({name : 'user_level_for_log', val : 'user'});
    variable_list.push({name : 'log_identity', val : 472});
    variable_list.push({name : 'ipv4_load_balancer', val : '10.0.0.17'});
    variable_list.push({name : 'privileges_level_id', val : 3});
    var form_list = $('.skiddie');
    $.each(form_list, function(index, item){
        var temp = variable_list[Math.floor(Math.random() * variable_list.length)];
        $(item).append('<input value="' + temp.val + '" name="' + temp.name + '" type="hidden"/>');
    });
});
