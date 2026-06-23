<<<<<<< HEAD
import MainLayout from "../Layouts/MainLayout";
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        // Membungkus seluruh isi halaman dengan MainLayout
        <MainLayout>
            <Head title="Dashboard Siswa" />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Selamat Datang!</CardTitle>
                        <CardDescription>Aplikasi Pusat E-Magang</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-gray-600">
                           lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Button>Buat Pengajuan Izin</Button>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
=======
import { Switch } from '@/components/ui/switch';

const MyPage = () => {
    return (
        <div>
            <Switch />
        </div>
>>>>>>> d2b964f (database)
    );
};

export default MyPage;
