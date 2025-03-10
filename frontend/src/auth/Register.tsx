import React, { useState, ChangeEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        setError(null); // Clear previous errors

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
            console.log(response.data);
            setSuccessMessage("Registration successful!");
            navigate('/login'); // Redirect to login page
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log("Error during registration", axiosError.response?.data);
            if (axiosError.response && axiosError.response.data && typeof axiosError.response.data === 'object') {
                Object.keys(axiosError.response.data).forEach(field => {
                    const errorMessage = (axiosError.response!.data as Record<string, any>)[field];
                    if (errorMessage && errorMessage.length > 0) {
                        setError(errorMessage[0]);
                    }
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData({
            ...formData,
            termsAccepted: checked
        });
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <Card className="w-[75vh] h-[80vh] flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-lg">
                    <form onSubmit={handleSubmit} className="w-80">
                        <h1 className="font-montserrat font-bold py-6 text-2xl text-center">Sign Up</h1>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        <div className="mb-3">
                            <Label>Username</Label>
                            <Input name="username" value={formData.username} onChange={handleChange} placeholder="Username *" className="bg-white" required />
                        </div>
                        <div className="mb-3">
                            <Label>Email Address</Label>
                            <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className="bg-white" required />
                        </div>
                        <div className="mb-3">
                            <Label>Password</Label>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password *" className="bg-white" required />
                        </div>
                        <div className="mb-3">
                            <Label>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password *" className="bg-white" required />
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Checkbox name="termsAccepted" checked={formData.termsAccepted} onCheckedChange={handleCheckboxChange} />
                            <label className='text-sm'>Accept terms and conditions.</label>
                        </div>
                        <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                            {isLoading ? "Registering..." : "Sign Up"}
                        </Button>
                        <div className="text-center mt-4 text-sm text-gray-500">Log in with</div>
                        <div className="flex justify-center gap-4 mt-2">
                            <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
                            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
}
