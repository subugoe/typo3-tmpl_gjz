<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class FacetClassificationPathViewHelper extends AbstractViewHelper {
  
    /**
     * Ersetzt alle Vorkommen des Suchstrings $search durch einen anderen String $replace
     *
     * @param string $search
     * @param string $replace
     * @return string
     */
    public function render() {
     
        $subject = $this->renderChildren(); 
		preg_match('/[0-9]{9}/', $subject, $match);
		if ( $match[0] == "") {
			preg_match('/[0-9]{8}[A-Z]{1}/', $subject, $match);
		}
		$ppn = $match[0];
		$sub1 = str_replace($ppn, "", $subject);
		
		preg_match('/[A-ZÄÖÜ]{1}[a-zäöüß]{1,}[.]{1}([0-9]{1,}[.]{1})*[ ]*/', $subject, $match2);
		$notation = $match2[0];
		$sub2 = str_replace($notation, "", $sub1);
		
		$notation = str_replace(" ", "", $notation);
		if ($notation != "") {
			$notation = "  (".$notation.")";
		}
		$erg = $sub2.$notation;
		
		$firstChar = substr($erg, 0, 1);
		if ($firstChar == " ") {
			$erg = substr($erg, 1);
		}
		
		return $erg;
         
    }
  
}
?>
