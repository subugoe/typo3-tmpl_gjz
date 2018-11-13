<?php

namespace Gjz18\TmplGjz\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Database migrations for TYPO3 8.7.
 */
class DatabaseMigration extends Command
{
    public function configure()
    {
        $this->setDescription('Upgrades the database parameters to TYPO3 8.7.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Updating language ISO Codes');
        $this->updateLanguageIsoValues();

        $output->writeln('Updating media fields');
        $this->updateMediaFields();

        $output->writeln('Updating image fields');
        $this->updateImageFields();

        return 0;
    }

    private function updateLanguageIsoValues()
    {
        $languages = [
            'cs' => 'cz',
            'en' => 'gb',
            'fr' => 'fr',
            'it' => 'it',
            'es' => 'es',
            'la' => 'la',
        ];

        $connectionPool = GeneralUtility::makeInstance(ConnectionPool::class);
        $queryBuilder = $connectionPool->getQueryBuilderForTable('sys_language');
        foreach ($languages as $key => $value) {
            $queryBuilder
                ->update('sys_language')
                ->where(
                    $queryBuilder
                        ->expr()
                        ->eq('flag', $queryBuilder->createNamedParameter($value))
                )
                ->set('language_isocode', $key)
                ->execute();
        }
    }

    private function updateMediaFields()
    {
        $connectionPool = GeneralUtility::makeInstance(ConnectionPool::class);
        $tables = ['pages', 'pages_language_overlay', 'tt_content'];

        foreach ($tables as $table) {
            $queryBuilder = $connectionPool->getQueryBuilderForTable($table);

            $queryBuilder
                ->update($table)
                ->where(
                    $queryBuilder
                        ->expr()
                        ->orX(
                            $queryBuilder->expr()->isNull('media'),
                            $queryBuilder->expr()->eq('media', "''")
                        )
                )
                ->set('media', 0)
                ->execute();
        }
    }

    private function updateImageFields()
    {
        $connectionPool = GeneralUtility::makeInstance(ConnectionPool::class);

        $tables = ['tt_content'];

        foreach ($tables as $table) {
            $queryBuilder = $connectionPool->getQueryBuilderForTable($table);

            $queryBuilder
                ->update($table)
                ->where(
                    $queryBuilder
                        ->expr()
                        ->orX(
                            $queryBuilder->expr()->isNull('image'),
                            $queryBuilder->expr()->eq('image', "''")
                        )
                )
                ->set('image', 0)
                ->execute();
        }
    }
}
