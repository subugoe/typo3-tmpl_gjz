<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class BibPrefixViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

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
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$numBrac = substr_count($result, "(");
		
		if ( $numBrac == 1 ) {
			$prefix = (string)substr($result, 0, strpos($result, "("));
			
			$lastChar = (string)substr($prefix, -1);
			if ( ( $lastChar == "." ) || ( $lastChar == " " ) ) {
				$prefix = (string)substr($prefix, 0, -1);
				$lastChar = (string)substr($prefix, -1);
				if ( ( $lastChar == "." ) || ( $lastChar == " " ) ) {
					$prefix = (string)substr($prefix, 0, -1);
					$lastChar = (string)substr($prefix, -1);
					if ( ( $lastChar == "." ) || ( $lastChar == " " ) ) {
						$prefix = (string)substr($prefix, 0, -1);
					}
				}
			}
			$prefix = trim($prefix);
			if ( $prefix == NULL ) return "k.A.";
			else return $prefix;
		}
		elseif ( $numBrac == 2 ) {
			$prefixPt1Pre = (string)substr($result, 0, strpos($result, "("));
			$prefixPt1Suf = (string)substr($result, strpos($result, "(")+1);
			
			$prefixPt2 = (string)substr($prefixPt1Suf, 0, strpos($prefixPt1Suf, "("));
			$prefix = $prefixPt1Pre."(".$prefixPt2;
			
			$lastChar = (string)substr($prefix, -1);
			if ( ( $lastChar == "." ) || ( $lastChar == " " ) ) {
				$prefix = (string)substr($prefix, 0, -1);
				$lastChar = (string)substr($prefix, -1);
				if ( ( $lastChar == "." ) || ( $lastChar == " " ) ) {
					$prefix = (string)substr($prefix, 0, -1);
					$lastChar = (string)substr($prefix, -1);
					if ( ( $lastChar == "." ) || ( $lastChar == " " ) ) {
						$prefix = (string)substr($prefix, 0, -1);
					}
				}
			}
			$prefix = trim($prefix);
			if ( $prefix == NULL ) return "k.A.";
			else return $prefix;
		}
		else {
			return $result;
		}
		
	}
  
}
?>