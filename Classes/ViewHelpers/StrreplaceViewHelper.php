<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class StrreplaceViewHelper extends AbstractViewHelper {

    /**
     * Registers own arguments.
     */
    public function initializeArguments() {
        parent::initializeArguments();
        $this->registerArgument('search', 'mixed', 'The string to be replaced', TRUE);
        $this->registerArgument('replace', 'mixed', 'The replacing string', TRUE);
    }
  
    /**
     * Ersetzt alle Vorkommen des Suchstrings $search durch einen anderen String $replace
     *
     * @param string $search
     * @param string $replace
     * @return string
     */
    public function render() {
        $search = $this->arguments['search'];
        $replace = $this->arguments['replace'];
        $subject = $this->renderChildren(); 
        return str_replace($search, $replace, $subject);
         
    }
  
}
?>
