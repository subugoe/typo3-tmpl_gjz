<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class SystemstellePPNViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

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
		$ppn = NULL;
		
		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		preg_match('/[0-9]{9}/', $result, $match);
		if ( $match[0] == "" ) {
			preg_match('/[0-9]{8}[A-Za-z]{1}/', $result, $match);
		}
		$ppn = $match[0];
		return $ppn;
		
	}
  
}
?>