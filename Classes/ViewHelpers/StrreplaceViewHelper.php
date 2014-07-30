<?php

namespace Gjz18\TmplGjz18\ViewHelpers;

class StrreplaceViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
  
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