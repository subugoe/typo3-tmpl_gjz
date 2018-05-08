<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class BibSuffixViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
	
		/**
		 * Search for book size and attach °
		 */
		function format( &$suffix ) {
			$sizes = array('2', '4', '8', '12', '16', '18', '20', '24', '32', '64');
			
			if ( strpos($suffix, ",") ) {
				$sufPt = (string)substr($suffix, 0, strpos($suffix, ","));
				$rest = (string)substr($suffix, strpos($suffix, ",")+1);
				if ( substr($sufPt, 0, 1) == "(" ) {
					$sufPt = (string)substr($sufPt, 1);
				}
			}
			else {
				$sufPt = $suffix;
				if ( substr($sufPt, 0, 1) == "(" ) {
					$sufPt = (string)substr($sufPt, 1);
				}
				if ( substr($sufPt, -1) == ")" ) {
					$sufPt = (string)substr($sufPt, 0, -1);
				}
			}
			
			if ( preg_match('/[0-9]/', $sufPt) ) {
				if ( in_array($sufPt, $sizes) and $rest ) {
					$suffix = $sufPt."°, ".$rest;
					return;
				}
				elseif ( in_array($sufPt, $sizes) ) {
					$suffix = $sufPt."°";
					return;
				}
				else {
					return;
				}
			}
			else {
				return;
			}
			
		}
		
		
		
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}

		$numBrac = substr_count($result, "(");
		
		if ( $numBrac == 1 ) {
			$suffix = (string)substr($result, strpos($result, "("));
			format($suffix);
			return $suffix;
		}
		elseif ( $numBrac == 2 ) {
			$suffixPt1 = (string)substr($result, strpos($result, "(")+1);
			$suffixPt2 = (string)substr($suffixPt1, strpos($suffixPt1, "("));
			$suffix = $suffixPt2;
			format($suffix);
			return $suffix;
		}
		else {
			return "---";
		}
		
	}
	
  
}
?>