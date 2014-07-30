<?php

class Tx_Find_ViewHelpers_StrreplaceViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {
  
    /**
     * Ersetzt alle Vorkommen des Suchstrings $search durch einen anderen String $replace
     *
     * @param string $search
     * @param string $replace
     * @return string
     */
    public function render($search = '', $replace = '') {
     
        $subject = $this->renderChildren(); 
        return str_replace($search, $replace, $subject);
         
    }
  
}
?>