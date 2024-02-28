<?php

namespace Inc;

class Templates
{
    public function my_plugin_register_page_template( $templates ) {
        $templates['my-custom-template.php'] = 'My Custom Page';
        return $templates;
    }

    public function my_plugin_load_template( $template ) {
        if( is_page_template('my-custom-template.php') ) {
            // Full path to the file in your plugin
            $plugin_template = WP_PLUGIN_DIR . '/manyjobs/templates/manyjobs/my-custom-template.php';
            if( file_exists( $plugin_template ) ) {
                return $plugin_template;
            }
        }
        return $template;
    }

    public function register()
    {
        add_filter( 'theme_page_templates', array( $this, 'my_plugin_register_page_template' ) );
        add_filter( 'template_include', array( $this, 'my_plugin_load_template' ) );
    }
}