<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class SystemstelleLangformViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

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

		$digits = array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
		
		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$firstChar = (string)substr($result, 0, 1);
		
		if ( in_array($firstChar, $digits) ) {
		
			$firstSpacePos = strpos($result, " ");
			$result = (string)substr($result, $firstSpacePos+1);
			
			$secondSpacePos = strpos($result, " ");
			$result = (string)substr($result, $secondSpacePos+1);
		
		}
		else {
		
			$firstSpacePos = strpos($result, " ");
			$result = (string)substr($result, $firstSpacePos+1);
			
			$secondSpacePos = strpos($result, " ");
			$result = (string)substr($result, $secondSpacePos+1);
			
			$thirdSpacePos = strpos($result, " ");
			$result = (string)substr($result, $thirdSpacePos+1);
		
		}
		
		$resultFirstChar = (string)substr($result, 0, 1);
		$resultLastChar = (string)substr($result, -1);
		
		if ($resultFirstChar == " ") {
			$result = (string)substr($result, 1);
		}
		if ($resultLastChar == " ") {
			$result = (string)substr($result, 0, -1);
		}
		
		return $result;
		
	}
  
}
?>