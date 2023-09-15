<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Storage;
use Session;

class BackupController extends Controller
{
    public function index() 
    {
        // return Storage::disk('highsociety')->listContents();
        $backups = Storage::disk('highsociety')->listContents();

        return view('admin.backupManager', ['backups' => $backups]);
    }

    public function createBackup() 
    {
        \Artisan::call('backup:run --only-db');

        toastr()->success(__('Backup erfolgreich erstellt'));
        Session::flash('success', __('Backup erfolgreich erstellt'));
    }

    public function downloadBackup($fileName) 
    {
        return Storage::disk('highsociety')->download($fileName);
    }

    public function deleteBackup($fileName) 
    {
        Storage::disk('highsociety')->delete($fileName);

        toastr()->success('Backup erfolgreich gelöscht');
        Session::flash('Backup erfolgreich gelöscht');

        return redirect()->back();
    }
    
}
