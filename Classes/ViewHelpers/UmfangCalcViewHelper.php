<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class UmfangCalcViewHelper extends AbstractViewHelper {

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
		
		if ( strpos($result, "-") !== FALSE ) {
			$subtrahend = (int)substr($result, 0, strpos($result, "-"));
			$minuend = (int)substr($result, strpos($result, "-")+1);
			$differenz = $minuend - $subtrahend;
			$umfang = $differenz + 1;
			return $umfang;
		}
		else {
			return 1;
		}
		
	}
  
}
?>
