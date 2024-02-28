<?php

/*
Plugin Name: ManyJobs
Description: Sistema personalizado da Mani Jobs.
Version: 2.0.0
Author: Creative Minds
Author URI: https://creative-minds.pt
 */

use Inc\Templates;

function log_debug_message($message) {
    $log_file =  'debug.log';
    $log_message = "[" . date("Y-m-d H:i:s") . "] " . $message . PHP_EOL;
    error_log($log_message, 3, $log_file);
}
//log_debug_message("MANYJOBS");

try{

if (!defined('ABSPATH')) {
    echo 'You can\'t access this file directly.';
    exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/Actions.php';
register_activation_hook(__FILE__, ['\Inc\Actions', 'onActivate']);
register_deactivation_hook(__FILE__, ['\Inc\Actions', 'onDeactivate']);

require_once plugin_dir_path( __FILE__ ) . 'includes/Templates.php';
if (class_exists('\Inc\Templates')) {
    $templates = new Templates();
    $templates->register();
}

/*function my_plugin_enqueue_scripts() {
    $plugin_url = plugin_dir_url(__FILE__);
    wp_enqueue_script('manyjobs', $plugin_url . 'dist/assets/main.js', array(), '1.0.0', true);
    wp_enqueue_style('manyjobs', $plugin_url . 'dist/assets/main.css', array(), '1.0.0', 'all');
}
log_debug_message("MANYJOBS");
add_action('wp_enqueue_scripts', 'my_plugin_enqueue_scripts');*/
function my_plugin_enqueue_scripts() {
    //if (is_page_template('my-custom-template.php')) {
    $plugin_dir_path = plugin_dir_path(__FILE__) . 'dist/assets/';
    $plugin_url = plugin_dir_url(__FILE__) . 'dist/assets/';
    $dir = new DirectoryIterator($plugin_dir_path);

    foreach ($dir as $fileinfo) {
        if (!$fileinfo->isDot()) {
            $filename = $fileinfo->getFilename();
            // Assumindo que você só tem um arquivo JS e um arquivo CSS que você quer incluir
            if (preg_match('/index-.*\.js$/', $filename)) {
                wp_enqueue_script('manyjobs-script', $plugin_url . $filename, array(), '1.0.0', true);
            } elseif (preg_match('/index-.*\.css$/', $filename)) {
                wp_enqueue_style('manyjobs-style', $plugin_url . $filename, array(), '1.0.0', 'all');
            }
        }
    //}
}
}
add_action('wp_enqueue_scripts', 'my_plugin_enqueue_scripts');
/*function my_plugin_enqueue_scripts() {
    if (is_page_template('my-custom-template.php')) {
    $plugin_dir_path = plugin_dir_path(__FILE__) . 'dist/assets/';
    $plugin_url = plugin_dir_url(__FILE__) . 'dist/assets/';
    $dir = new DirectoryIterator($plugin_dir_path);

    foreach ($dir as $fileinfo) {
        if (!$fileinfo->isDot()) {
            $filename = $fileinfo->getFilename();
            if (preg_match('/index-.*\.js$/', $filename)) {
                // Adiciona 'wp-element' como dependência para incluir React e ReactDOM
                wp_enqueue_script('manyjobs-script', $plugin_url . $filename, array('wp-element'), '1.0.0', true);
            } elseif (preg_match('/index-.*\.css$/', $filename)) {
                wp_enqueue_style('manyjobs-style', $plugin_url . $filename, array(), '1.0.0', 'all');
            }
        }
    }
    }
}
add_action('wp_enqueue_scripts', 'my_plugin_enqueue_scripts');*/

}catch(Exception $ex){
    log_debug_message($ex->getMessage());
}